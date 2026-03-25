import sys
try:
    import pypdf
    reader = pypdf.PdfReader('/Users/halakhalifa/Desktop/Hala_Mohammed_Amen_Khalifeh_Resume_2026.pdf')
    print("".join(page.extract_text() or '' for page in reader.pages))
except ImportError:
    try:
        import PyPDF2
        reader = PyPDF2.PdfReader('/Users/halakhalifa/Desktop/Hala_Mohammed_Amen_Khalifeh_Resume_2026.pdf')
        print("".join(page.extract_text() or '' for page in reader.pages))
    except ImportError:
        try:
            import pdfplumber
            with pdfplumber.open('/Users/halakhalifa/Desktop/Hala_Mohammed_Amen_Khalifeh_Resume_2026.pdf') as pdf:
                print("".join(page.extract_text() or '' for page in pdf.pages))
        except ImportError:
            print("No pdf library found in this venv.")
