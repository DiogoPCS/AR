import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
    providedIn: 'root',
})

export class MessageService {

    constructor( 
        private _toastController: ToastController
    ) { }

    public show(message: any, duration = 3000, color = 'primary') {
        this._toastController.create({
            message: message,
            duration: duration,
            color: color
        }).then(toast => toast.present());
    }
}