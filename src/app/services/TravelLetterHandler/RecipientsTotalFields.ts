import { deepMap, sumListProps } from '../../utils'
import { Batch, BatchItem, SenderRecipient } from '../../type'

export interface RecipientsTotalFieldsInterface {
  quantity: number
  weight: number
  volume: number
  batchesCount: number
  itemsCount: number
  fullBatchesList: Batch[]
  fullItemsList: BatchItem[]
}

export class RecipientsTotalFields implements RecipientsTotalFieldsInterface {
  constructor (private readonly recipients: SenderRecipient[]) {}

  get quantity (): number {
    return sumListProps(this.fullItemsList, 'quantity');
  }

  get weight (): number {
    return sumListProps(this.fullBatchesList, 'weight');
  }

  get volume (): number {
    return sumListProps(this.fullBatchesList, 'volume');
  }

  get batchesCount (): number {
    return this.fullBatchesList.length;
  }

  get itemsCount (): number {
    return this.fullItemsList.length;
  }

  get fullBatchesList (): Batch[] {
    return deepMap(this.recipients, 'batches');
  }

  get fullItemsList (): BatchItem[] {
    return deepMap(this.fullBatchesList, 'items');
  }
}
