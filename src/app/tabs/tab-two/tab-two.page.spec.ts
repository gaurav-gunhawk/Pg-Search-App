import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabTwoPage } from './tab-two.page';

describe('TabTwoPage', () => {
  let component: TabTwoPage;
  let fixture: ComponentFixture<TabTwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabTwoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
