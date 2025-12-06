import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import OpenAI from 'openai';

@Injectable()
export class AiEngineService {
  private openai: OpenAI;
  private readonly logger = new Logger(AiEngineService.name);

  constructor(private configService: ConfigService) {
    const apiKey = this.configService.get<string>('OPENAI_API_KEY');
    if (apiKey) {
      this.openai = new OpenAI({ apiKey });
    } else {
      this.logger.warn('OPENAI_API_KEY not found. Using mock response.');
    }
  }

  async generateRecoveryPlan(prompt: string) {
    if (this.openai) {
      try {
        const completion = await this.openai.chat.completions.create({
          messages: [{ role: 'system', content: prompt }],
          model: 'gpt-3.5-turbo',
          response_format: { type: 'json_object' },
        });

        const content = completion.choices[0].message.content;
        if (!content) {
            throw new Error('No content returned from OpenAI');
        }
        try {
          return JSON.parse(content);
        } catch (e) {
          this.logger.error('Failed to parse OpenAI response as JSON', e);
          // Fallback to mock if parsing fails
        }
      } catch (error) {
        this.logger.error('Error calling OpenAI', error);
      }
    }

    return this.getMockResponse(prompt);
  }

  private getMockResponse(prompt?: string) {
    let injury = "Esguince de tobillo leve (Grado 1)";
    if (prompt) {
      // Simple regex to extract injury from the prompt structure defined in PromptBuilder
      const match = prompt.match(/USER INJURY \(Spanish\):\s*([\s\S]*?)(?:USER SPECIFIC CONTEXT|$)/);
      if (match && match[1]) {
        injury = match[1].trim();
      }
    }

    // For MVP/Demo, returning a mocked response that matches the structure
    return {
      resumen_lesion: injury,
      objetivo_fase: "Reducir inflamación y recuperar movilidad sin dolor.",
      ejercicios: [
        {
          nombre: "Movilidad de tobillo (Alfabeto)",
          instrucciones: "Dibuja las letras del alfabeto con la punta del pie en el aire.",
          series: "3",
          repeticiones: "1 vez el abecedario",
          duracion: "N/A",
          que_evitar: "Dolor punzante al extremos del movimiento",
          nivel_dolor_permitido: "2/10"
        },
        {
          nombre: "Isométrico de eversión",
          instrucciones: "Empuja el pie hacia afuera contra una pared sin moverlo.",
          series: "3",
          repeticiones: "10 segundos",
          duracion: "10s",
          que_evitar: "Movimiento brusco",
          nivel_dolor_permitido: "1/10"
        }
      ],
      reglas_progresion: [
        "Dolor menor a 3/10",
        "Sin inflamación post-ejercicio"
      ],
      alertas: [
        "Si el tobillo se hincha mucho, aplicar hielo y elevar."
      ],
      recomendaciones: "Usar calzado cómodo y evitar terrenos irregulares."
    };
  }
}
