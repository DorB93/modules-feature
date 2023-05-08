import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list.component';

const SlRouts = [
	{
		path: 'shopping-list',
		component: ShoppingListComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(SlRouts)],
	exports: [RouterModule],
})
export class ShoppingListRoutingModule {}
