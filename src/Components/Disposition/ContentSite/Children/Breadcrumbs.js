import { BreadCrumb } from 'primereact/breadcrumb';
import * as React from "react";

class Breadcrumbs extends React.Component{
    render() {

        const items = [
            { label: 'Categories' },
            { label: 'Sports' },
            { label: 'Football' },
            { label: 'Countries' },
            { label: 'Spain' },
            { label: 'F.C. Barcelona' },
            { label: 'Squad' },
            { label: 'Lionel Messi', url: 'https://en.wikipedia.org/wiki/Lionel_Messi' }
        ];

        const home = { icon: 'pi pi-home', url: 'https://www.primefaces.org/primereact' }

        return <BreadCrumb model={items} home={home}/>
    }
}

export default Breadcrumbs
