import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabOnePage } from './tab-one.page';

describe('TabOnePage', () => {
  let component: TabOnePage;
  let fixture: ComponentFixture<TabOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabOnePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
