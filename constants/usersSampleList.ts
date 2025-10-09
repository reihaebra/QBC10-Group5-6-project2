export interface Admin {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
}

export interface EditingState {
  index: number;
  field: "name" | "email";
}

export const admins: Admin[] = [
  {
    id: 1238912389128377,
    name: "Ali Mousavi",
    email: "Ali.mousavi@gmail.com",
    isAdmin: true,
  },
  {
    id: 1238912389128378,
    name: "مهدی حسینی",
    email: "mahdihoseini@gmail.com",
    isAdmin: false,
  },
  {
    id: 1238912389128379,
    name: "شاهرخ",
    email: "Example@gmail.com",
    isAdmin: false,
  },
];
