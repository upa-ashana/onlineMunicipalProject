import { TransferRoutingModule } from './transfer-routing.module';

describe('TransferRoutingModule', () => {
  let transferRoutingModule: TransferRoutingModule;

  beforeEach(() => {
    transferRoutingModule = new TransferRoutingModule();
  });

  it('should create an instance', () => {
    expect(transferRoutingModule).toBeTruthy();
  });
});
