import { Injectable, BadRequestException } from '@nestjs/common';
import { KINESIOLOGY_CONTEXT } from '../common/constants/kinesiology.constant';

@Injectable()
export class InputNormalizerService {
  async normalize(data: any) {
    const injury = data.injuryDescription.toLowerCase();
    const supported = KINESIOLOGY_CONTEXT.supported_injuries_mvp;
    
    let detectedCategory = 'Unknown / General';
    let isSupported = false;

    // Mapping Spanish terms to English keys for validation
    // Tears (Desgarros)
    if (supported.tears.some(d => {
        if (injury.includes(d) || 
           (d === 'calf' && injury.includes('gemelo')) ||
           (d === 'hamstrings' && injury.includes('isquios')) ||
           (d === 'quadriceps' && injury.includes('cuadriceps')) ||
           (d === 'adductors' && injury.includes('aductores'))) {
             detectedCategory = `Muscle Tear (${d})`;
             return true;
           }
           return false;
    })) isSupported = true;

    // Tendinopathies (Tendinopatias)
    if (!isSupported && supported.tendinopathies.some(t => {
        if (injury.includes(t) ||
           (t === 'achilles' && injury.includes('aquiles')) ||
           (t === 'patellar' && injury.includes('rotuliana')) ||
           (t === 'gluteus_medius' && injury.includes('gluteo_medio')) ||
           (t === 'shoulder_tendon' && injury.includes('hombro'))) {
             detectedCategory = `Tendinopathy (${t})`;
             return true;
           }
           return false;
    })) isSupported = true;

    // Sprains (Esguinces)
    if (!isSupported && supported.sprains.some(e => {
        if (injury.includes(e) ||
           (e === 'ankle_mild' && injury.includes('tobillo')) ||
           (e === 'knee_mild' && injury.includes('rodilla'))) {
             detectedCategory = `Sprain (${e})`;
             return true;
           }
           return false;
    })) isSupported = true;

    // Lumbar
    if (!isSupported && (supported.mechanical_low_back_pain && injury.includes('lumbar'))) {
        isSupported = true;
        detectedCategory = 'Mechanical Low Back Pain';
    }

    if (!isSupported) {
      console.warn(`Injury '${injury}' might not be fully supported in MVP.`);
    }

    return {
      originalInput: data.injuryDescription,
      detectedCategory: detectedCategory,
      context: data.kinesiologistContext,
      normalized: true,
    };
  }
}
