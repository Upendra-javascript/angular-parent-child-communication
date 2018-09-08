import { RouterModule,Routes} from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent} from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ViewparentComponent } from './viewparent/viewparent.component';
import { ViewchildrenComponent } from './viewchildren/viewchildren.component';
import { ExampleformComponent } from './exampleform/exampleform.component';
import { DisplayformComponent} from './displayform/displayform.component';

const appRoutes : Routes = [
    {path:'parent',component:ParentComponent,
    children:[{
        path:'children',component:ChildComponent}
    ]},
    {path:'viewparent',component:ViewparentComponent,
    children:[{
        path:'viewchildren',component:ViewchildrenComponent
    }
]},
{path:'exampleform',component:ExampleformComponent}
];

@NgModule ({
    imports:[
    RouterModule.forRoot(appRoutes)
    ],
    exports:[
        RouterModule
    ]
})

export class AppRoutingModule {}
