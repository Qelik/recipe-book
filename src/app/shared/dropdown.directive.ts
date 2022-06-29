import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appDropdown]',
})

export class DropdownDirective {
    constructor(private el:ElementRef, private renderer: Renderer2) {}

    @HostBinding('class.show') isOpen = false;
    
    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
        let dropdown = this.el.nativeElement.querySelector('.dropdown-toggle');
        let elements = this.el.nativeElement.querySelector('.dropButton');
        if (this.isOpen) {
            this.renderer.addClass(dropdown, 'show');
            this.renderer.addClass(elements, 'show');
        }
        else {
            this.renderer.removeClass(dropdown, 'show');
            this.renderer.removeClass(elements, 'show');
        }
    }
}