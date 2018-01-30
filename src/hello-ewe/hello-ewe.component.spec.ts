import {
    async,
    ComponentFixture,
    TestBed
} from '@angular/core/testing';

import {
    HelloEweComponent
} from './hello-ewe.component';

describe('HelloEweComponent', () => {
    let component: HelloEweComponent;
    let fixture: ComponentFixture<HelloEweComponent>;
    let dom: any;

    beforeEach(async() => {
        TestBed.configureTestingModule({
            declarations: [ HelloEweComponent ]
        });
        fixture = TestBed.createComponent(HelloEweComponent);
        component = fixture.componentInstance;
        dom = fixture.nativeElement;
    });

    test('should exist', () => {
        expect(component).toBeDefined();
    });

    test('should have a default name', () => {
        expect(component.name).toBe('Sheep')
    });

    test('should output a <p> with "Baaa, I\'m a {{ name }}!', () => {
        fixture.detectChanges(); // renders the dom
        expect(dom.innerHTML).toBe('<p>Baaa, I\'m a Sheep!</p>');
    });
});