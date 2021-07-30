import Vue from 'vue'
import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm';
import { ValidationObserver } from 'vee-validate'
import { localize } from 'vee-validate';
import es from 'vee-validate/dist/locale/es.json';

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

localize({
    es
});
