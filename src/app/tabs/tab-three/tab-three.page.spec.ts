import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabThreePage } from './tab-three.page';

describe('TabThreePage', () => {
  let component: TabThreePage;
  let fixture: ComponentFixture<TabThreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabThreePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
