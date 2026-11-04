import React from 'react';
import { APP_VERSION, APK_FILENAME, GITHUB_RELEASE_APK_URL } from '../data/constants';

export default function Footer({ onDownload }) {
  return (
    <footer className="py-12 bg-darkBg text-xs text-textSec">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-primary flex items-center justify-center text-white font-black text-xs">
            C
          </div>
          <span className="font-bold text-white">Cifroo Mobile {APP_VERSION}</span>
          <span>• Feito para Músicos de Palco</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={GITHUB_RELEASE_APK_URL}
            onClick={onDownload}
            className="hover:text-primary transition-colors font-bold cursor-pointer"
          >
            Baixar {APK_FILENAME}
          </a>
          <a href="./version.json" className="hover:text-primary transition-colors">
            Manifest {APP_VERSION}
          </a>
        </div>

        <p>© {new Date().getFullYear()} Cifroo Mobile. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
