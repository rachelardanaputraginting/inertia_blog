import App from '@/Layouts/App';
import { Head } from '@inertiajs/react';

export default function Dashboard(props) {
    return (
        <>
            <Head title="Dashboard" />
            Home
        </>
    );
}

Dashboard.layout = page => <App children={page} />
