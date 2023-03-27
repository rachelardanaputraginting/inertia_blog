import Container from '@/Components/Container';
import App from '@/Layouts/App';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <>
            <Head title="Dashboard" />
            <Container>
                Dashboard
            </Container>
        </>
    );
}

Dashboard.layout = page => <App children={page} />
