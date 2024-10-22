export type MarbleType = {
  count: number;
  id: string;
};

export type MarbleProps = {
  incrementMarble: (id: string) => void;
  decrementMarble: (id: string) => void;
  deleteMarble: (id: string) => void;
  startCountDown: (id: string) => void;
  startCountUp: (id: string) => void;
  stopCounter: () => void;
  count: number;
  id: string;
};
