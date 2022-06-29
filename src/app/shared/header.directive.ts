import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector: '[navDown]',
})

export class HeaderDownDirective {
    constructor(private el:ElementRef, private renderer: Renderer2) {}

    @HostBinding('class.show') isOpen = false;
    
    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
        let dropdown = this.el.nativeElement.querySelector('.headDropNav');
        let next = dropdown.nextElementSibling;
        let arrange = this.el.nativeElement.querySelector('.navbar-toggler');
        if (this.isOpen) {
            this.renderer.addClass(dropdown, 'show');
            this.renderer.removeClass(next, 'collapsed');
        }
        else {
            this.renderer.removeClass(dropdown, 'show');
            this.renderer.addClass(next, 'collapsed');
        }
    }
}