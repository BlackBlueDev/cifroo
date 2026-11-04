import { APK_FILENAME, APP_VERSION } from './constants';

export const faqList = [
  {
    q: 'Como sei se estou baixando a versão mais recente?',
    a: `O arquivo agora possui o nome da versão embutido: ${APK_FILENAME}. Ao baixar no seu celular, você verá claramente a numeração ${APP_VERSION}, eliminando qualquer risco de confusão com versões antigas.`
  },
  {
    q: 'O app realmente funciona sem nenhuma internet no palco?',
    a: 'Sim, 100%! Ao colar o link do Cifra Club, todos os dados, acordes, letra e metadados são salvos no banco local do celular. Durante o culto ou show, o app não faz nenhuma conexão com a internet.'
  },
  {
    q: 'Se eu baixar a v0.0.2 por cima da v0.0.1, perco minhas cifras?',
    a: 'Não! O Cifroo foi arquitetado para atualizações in-place do Android. Ao instalar o novo APK por cima do antigo, o Android preserva integralmente todas as suas cifras salvas, edições manuais, repertórios e preferências.'
  },
  {
    q: 'Como funciona a transposição automática por Capotraste no v0.0.2?',
    a: 'Ao alterar a casa do capotraste, o motor harmônico do Cifroo separa a forma escrita (shapeKey) mantendo o som real (soundingKey) idêntico ao que a banda e a congregação estão ouvindo.'
  },
  {
    q: 'Posso usar para Teclado e Contrabaixo também?',
    a: 'Sim! O Cifroo possui visualizador harmônico multi-instrumento. Ao clicar em qualquer acorde, você pode alternar entre violão (braço com casas e dedos), teclado e contrabaixo.'
  },
  {
    q: 'O aplicativo tem anúncios ou mensalidade?',
    a: 'Zero anúncios e zero cobranças. O Cifroo foi feito por músicos para músicos com o compromisso de jamais interromper uma ministração com propagandas.'
  }
];
