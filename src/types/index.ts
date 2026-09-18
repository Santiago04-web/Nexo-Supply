export interface ContactFormData {
  nombre: string;
  empresa: string;
  correo: string;
  telefono: string;
  mensaje: string;
}

export interface FormStatus {
  submitting: boolean;
  success: boolean;
  error: string | null;
}
