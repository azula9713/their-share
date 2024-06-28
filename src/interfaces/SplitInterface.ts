interface IBaseSplitItem {
  id: string;
  amount: number;
  description: string;
}

interface ISplitItem extends IBaseSplitItem {
  splitBetween: IBasePerson[];
}

interface IBasePerson {
  id: string;
  name: string;
}

interface IPerson extends IBasePerson {
  splitItems: ISplitItem[];
}

interface ISplit {
  splitId: string;
  splitTitle: string;
  persons: IPerson[];
  totalAmount: number;
}

export type { IBasePerson, IBaseSplitItem, IPerson, ISplit, ISplitItem };
