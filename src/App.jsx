import {Container, Typography, Box} from '@mui/material';

export default function App() {
    return (
        // با تغییر maxWidth به "xs" یا "lg" تفاوت کادر را ببین
        <Container maxWidth="md" sx={{mt: 4}}>
            <Box
                dir="rtl"
                sx={{
                    bgcolor: '#e3f2fd',
                    p: 3,
                    borderRadius: 2,
                    border: '1px dashed #1976d2',
                    textAlign: 'center',
                }}
            >
                <Typography variant="h5" color="primary" gutterBottom>
                    این محتوا داخل یک Container با maxWidth="md" است
                </Typography>
                <Typography variant="body2">
                    پنجره مرورگر را کوچک و بزرگ کن؛ می‌بینی که محتوا در مرکز باقی می‌ماند و از 900 پیکسل عریض‌تر
                    نمی‌شود.
                </Typography>
            </Box>
        </Container>
    );
}