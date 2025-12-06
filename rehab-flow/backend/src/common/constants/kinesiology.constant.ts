export const KINESIOLOGY_CONTEXT = {
  version: '1.0',
  domain: 'kinesiology',
  purpose:
    'Generate safe and personalized recovery plans based on injury, pain, time since event, and user goals. The model must limit its response to this context.',

  principles: {
    safety: [
      'Never indicate exercises that generate acute or sharp pain.',
      'Mild discomfort of 1 to 3/10 is allowed as long as it does not increase.',
      'Stop exercise if inflammation increases, strong pain occurs, or sudden limitation.',
      'If neurological symptoms are present, suggest in-person evaluation.',
    ],
    progression_rules: [
      'Increase load only if pain remains stable or decreases.',
      'Do not advance phase with pain greater than 3/10.',
      'Execute exercises with clean technique before progressing.',
      'Avoid impact until advanced phases depending on the injury.',
    ],
    tone: {
      style: 'clear, concise, motivating',
      avoid: [
        'excessively technical terminology',
        'complex clinical diagnoses',
      ],
    },
  },

  phases: {
    phase_1_acute: {
      time: '0-72 hours or up to 5 days for tears',
      objective: [
        'Reduce pain and inflammation',
        'Protect injured tissue',
        'Light mobility without pain',
      ],
      techniques: [
        'RICE or POLICE',
        'Passive or light active mobility',
        'Gentle isometrics as tolerated',
        'Short walks if no pain',
      ],
    },
    phase_2_subacute: {
      time: '3 to 14 days',
      objective: [
        'Recover range of motion',
        'Activate musculature',
        'Initial stability',
      ],
      techniques: [
        'Active mobility',
        'Progressive isometrics',
        'Light load without impact',
      ],
    },
    phase_3_strengthening: {
      time: '2 to 6 weeks',
      objective: [
        'Global strengthening',
        'Control and balance',
        'Improve dynamic stability',
      ],
      techniques: [
        'Concentric and eccentric exercises',
        'Proprioception',
        'Functional patterns according to injury',
      ],
    },
    phase_4_return: {
      time: '4 to 8 weeks or more',
      objective: [
        'Sports or functional preparation',
        'Progressive impact',
        'Specific sports technique',
      ],
      techniques: [
        'Controlled plyometrics',
        'Power exercises',
        'Simulation of real movements',
      ],
    },
  },

  supported_injuries_mvp: {
    tears: ['calf', 'hamstrings', 'quadriceps', 'adductors'],
    tendinopathies: [
      'achilles',
      'patellar',
      'gluteus_medius',
      'shoulder_tendon',
    ],
    sprains: ['ankle_mild', 'knee_mild'],
    mechanical_low_back_pain: true,
  },

  plan_structure: {
    required_sections: [
      'resumen_lesion',
      'objetivo_fase',
      'ejercicios',
      'reglas_progresion',
      'alertas',
      'recomendaciones',
    ],
    ejercicio_fields: [
      'nombre',
      'instrucciones',
      'series',
      'repeticiones',
      'duracion',
      'que_evitar',
      'nivel_dolor_permitido',
    ],
  },

  progression_criteria: {
    to_advance: [
      'Pain less than or equal to 3/10',
      'No increase in inflammation',
      'Correct technique',
      'Good tolerance to current load',
    ],
  },

  alerts: {
    signals: [
      'Acute or sharp pain',
      'Inflammation increasing after exercise',
      'Sudden loss of strength',
      'Neurological symptoms',
      'Persistent night pain',
    ],
  },

  limitations: {
    do_not: [
      'Do not diagnose severe injuries.',
      'Do not interpret ultrasounds or studies (MVP).',
      'Do not prescribe medication.',
      'Do not suggest impact exercises in early phases.',
    ],
    disclaimer:
      'This plan is indicative based on user information. In case of doubt or worsening symptoms, consult a kinesiologist.',
  },
};
