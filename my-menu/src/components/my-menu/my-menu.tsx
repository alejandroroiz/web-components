import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'my-menu',
  styleUrl: 'my-menu.css',
  shadow: true
})
export class MyMenu {

  @State() open: boolean = false;
  @State() showMenu: string = "";
  @State() showOpacity: string = "";
  @State() startMenu: string = "start-menu";

  handleClick() {
    if (this.open) {
      this.showMenu = "";
      this.showOpacity = "";
      this.startMenu = "start-menu";
    } else {
      this.showMenu = "showMenu";
      this.showOpacity = "showOpacity";
      this.startMenu = "start-menu active";
    }
    
    this.open = !this.open;
  }

  render() {
    return(
      <div>
        <div id="bg-opacity" class={this.showOpacity}></div>
        <div id="wrapper">
        <div id="show-menu" class={this.startMenu} onClick={() => this.handleClick()}>
          <span class="chevron"></span>
        </div>
        <div id="menu-wrapper" class={this.showMenu}>
            <div id="swipe-cmpnt" class="">
              <p>Select one of the options below</p>
              <ul>
                <li><a href="#">Menu <span>Option 1</span></a></li>
                <li><a href="#">Menu <span>Option 2</span></a></li>
                <li><a href="#">Menu <span>Option 3</span></a></li>
                <li><a href="#">Menu <span>Option 4</span></a></li>
                <li><a href="#"><span class="far fa-life-ring"></span>Help Center</a></li>
              </ul>
            </div>
        </div>
        </div>
      </div>
    );
  }
}

