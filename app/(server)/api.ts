import consultations from './db.json';

export function getAllСonsultations() {
  return consultations;
}

export function getСonsultationByName(consultationsName: string) {
  const consultation = consultations.find(x => x.name === consultationsName);

  if (!consultation) {
    throw new Error('error: article not found');
  }

  return consultation;
}
