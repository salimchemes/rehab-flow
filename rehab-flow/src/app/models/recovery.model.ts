export interface RecoveryPlanRequest {
  injuryDescription: string;
  kinesiologistContext: any;
}

export interface RecoveryPlan {
  resumen_lesion: string;
  objetivo_fase: string;
  ejercicios: Exercise[];
  reglas_progresion: string[];
  alertas: string[];
  recomendaciones: string;
}

export interface Exercise {
  nombre: string;
  instrucciones: string;
  series: string;
  repeticiones: string;
  duracion: string;
  que_evitar: string;
  nivel_dolor_permitido: string;
}
