import {
  Component, ViewChild, ViewContainerRef, ComponentFactory,
  ComponentRef, ComponentFactoryResolver, OnDestroy
} from '@angular/core';
import {AlertComponent} from './component/alert.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  componentRef: ComponentRef<AlertComponent>;
  title = 'app';
  @ViewChild('alertContainer', {read: ViewContainerRef}) container: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) {}

  createComponent(type: string) {
    this.container.clear();
    const factory: ComponentFactory<AlertComponent> = this.resolver.resolveComponentFactory(AlertComponent);
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.type = type;
    this.componentRef.instance.output.subscribe((msg: string) => console.log(msg));
  }
  ngOnDestroy() {
    this.componentRef.destroy();
  }
}
