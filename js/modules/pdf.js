// Descargar PDF
function setupPDFDownload() {
    const downloadBtn = document.getElementById('downloadPDF');
    if (downloadBtn) {
        const cvContent = document.getElementById('cvContent');
        
        downloadBtn.addEventListener('click', async () => {
            const isDarkMode = document.body.classList.contains('dark-mode');
            
            const opt = {
                margin: [0.5, 0.5, 0.5, 0.5],
                filename: window.currentLang === 'es' ? 'CV_Leonardo_Mendez_Lopez.pdf' : 'CV_Leonardo_Mendez_Lopez_EN.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2, useCORS: true, logging: false },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            
            const originalText = downloadBtn.textContent;
            downloadBtn.textContent = '⏳';
            downloadBtn.disabled = true;
            
            try {
                if (isDarkMode) {
                    document.body.classList.remove('dark-mode');
                    await new Promise(resolve => setTimeout(resolve, 100));
                }
                
                await html2pdf().set(opt).from(cvContent).save();
                
                if (isDarkMode) {
                    document.body.classList.add('dark-mode');
                }
            } catch (error) {
                console.error('Error:', error);
                alert(window.currentLang === 'es' ? '❌ Error al generar el PDF' : '❌ Error generating PDF');
            } finally {
                downloadBtn.textContent = originalText;
                downloadBtn.disabled = false;
            }
        });
    }
}

window.setupPDFDownload = setupPDFDownload;