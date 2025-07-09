export interface Activity {
  id: number;
  titulo: string;
  categoria: string;
  local: string;
}

export type Category = 'dança' | 'saúde' | 'tecnologia' | 'arte' | 'esporte' | 'lazer' | 'cultura';