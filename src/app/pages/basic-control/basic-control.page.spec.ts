import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BasicControlPage } from './basic-control.page';

describe('BasicControlPage', () => {
  let component: BasicControlPage;
  let fixture: ComponentFixture<BasicControlPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicControlPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BasicControlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
