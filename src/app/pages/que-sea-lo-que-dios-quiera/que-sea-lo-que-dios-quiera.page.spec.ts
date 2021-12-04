import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QueSeaLoQueDiosQuieraPage } from './que-sea-lo-que-dios-quiera.page';

describe('QueSeaLoQueDiosQuieraPage', () => {
  let component: QueSeaLoQueDiosQuieraPage;
  let fixture: ComponentFixture<QueSeaLoQueDiosQuieraPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ QueSeaLoQueDiosQuieraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QueSeaLoQueDiosQuieraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
