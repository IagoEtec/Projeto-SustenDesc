document.addEventListener('DOMContentLoaded', function() {
    const addProductButton = document.getElementById('addProduct');
    const submitProductButton = document.getElementById('submitProduct');
    const productFields = document.getElementById('productFields');
    const homeIdeas = document.getElementById('homeIdeas');
    const extraIdeas = document.getElementById('extraIdeas');
    const educationalIdeas = document.getElementById('educationalIdeas');
    const communityIdeas = document.getElementById('communityIdeas');

    function addProductField() {
        const fieldCount = productFields.children.length;
        if (fieldCount < 6) { // Permite até 6 campos (1 original + 5 adicionais)
            const newField = document.createElement('div');
            newField.className = 'product-field';
            newField.innerHTML = `
                <input type="text" name="product" placeholder="Exemplo: garrafa PET">
                <button type="button" class="removeProduct">Remover</button>
            `;
            productFields.appendChild(newField);

            // Adiciona o evento de clique ao botão de remover
            newField.querySelector('.removeProduct').addEventListener('click', function() {
                productFields.removeChild(newField);
            });
        }
    }

    function showIdeas() {
        const products = Array.from(document.querySelectorAll('#productFields input'))
            .map(input => input.value.toLowerCase().trim())
            .filter(value => value !== '');

        homeIdeas.innerHTML = '<h2>Para Casa</h2>';
        extraIdeas.innerHTML = '<h2>Renda Extra</h2>';
        educationalIdeas.innerHTML = '<h2>Educacional</h2>';
        communityIdeas.innerHTML = '<h2>Comunidade</h2>';

        products.forEach(product => {
            switch (product) {
                case 'garrafa pet':
                    homeIdeas.innerHTML += '<li>Use como vaso para plantas. Corte a parte superior e decore.</li>';
                    homeIdeas.innerHTML += '<li>Transforme em suporte para canetas. Faça furos na tampa e adicione suas canetas.</li>';
                    homeIdeas.innerHTML += '<li>Faça um pegador de frutas em galhos altos. Corte em 4 partes o fundo da garrafa para fazer uma especie de garra, junte isso com um cabo de vassoura na parte onde coloca a tampa, e um elastico, para voce assim poder abrir e fechar a garra.</li>';
                    extraIdeas.innerHTML += '<li>Crie artesanato para venda, como por exemplo brinquedos. Faça um barco de garrafa pet, assim execulte um corte na horizontal da garrafa deitada, pegue uma das metas, e a outra corte para fazer varios detalhes na carapassa do barco, e alem das velaz.</li>';
                    extraIdeas.innerHTML += '<li>Capinhas e Revestimentos. Transforme garrafas PET em capinhas para celulares ou revestimentos para outros itens, combinando criatividade e funcionalidade.</li>';
                    educationalIdeas.innerHTML += '<li>Use em projetos escolares. Utilize para colocar em diversas maquetes.</li>';
                    educationalIdeas.innerHTML += '<li>Mini Jardins: Crie mini-jardins em garrafas PET cortadas, que podem ser usados para ensinar sobre o ciclo da água, o crescimento das plantas e a ecologia.</li>'
                    educationalIdeas.innerHTML += '<li>História do Lixo. Crie uma linha do tempo ou um projeto sobre o impacto do lixo plástico no meio ambiente. Use garrafas PET para ilustrar a quantidade de plástico consumido e a necessidade de soluções sustentáveis.</li>';
                    communityIdeas.innerHTML += '<li>Distribua para projetos comunitários de jardinagem. Pode ser usado para plantar mudas.</li>';
                    communityIdeas.innerHTML += '<li>Murais e Esculturas. Crie murais ou esculturas para decorar espaços públicos. As garrafas PET podem ser transformadas em obras de arte que embelezam a comunidade e transmitem mensagens sobre reciclagem e sustentabilidade.</li>';
                    communityIdeas.innerHTML += '<li>Renda para Comunidades. Colabore com grupos locais para transformar garrafas PET em produtos que possam ser vendidos e gerar renda para projetos comunitários ou sociais.(Para ideias sobre oque fazer para vender pasta verificar a outra aba renda extra)</li>';
                    break;
                case 'papelão':
                    homeIdeas.innerHTML += '<li>Faça caixas organizadoras. Dobre e cole o papelão para criar caixas de armazenamento.</li>';
                    homeIdeas.innerHTML += '<li>Crie divisórias para gavetas. Corte e ajuste o papelão para organizar gavetas.</li>';
                    homeIdeas.innerHTML += '<li>Decoração de Interiores. Use papelão para criar itens de decoração para interiores, como painéis decorativos, prateleiras ou organizadores de parede.</li>';
                    homeIdeas.innerHTML += '<li>Protetores de Móveis: Faça protetores de papelão para colocar sob os pés dos móveis para proteger o piso de arranhões ou marcas. Isso é especialmente útil se você está mudando móveis frequentemente.</li>';
                    homeIdeas.innerHTML += '<li>Painéis de Isolamento: Construa painéis de papelão para isolamento temporário de janelas ou portas durante climas frios. Isso pode ajudar a manter o calor dentro de casa de forma temporária.</li>';
                    extraIdeas.innerHTML += '<li>Faça brinquedos reciclados. Monte brinquedos simples para crianças.</li>';
                    extraIdeas.innerHTML += '<li>Porta-Retratos. Faça porta-retratos de papelão decorados, que podem ser vendidos em feiras de artesanato ou online. Adicione pinturas, texturas ou colagens para torná-los únicos.</li>';
                    extraIdeas.innerHTML += '<li>Luminárias. Construa luminárias ou abajures usando papelão. Com um design criativo e acabamentos apropriados, elas podem se tornar itens de decoração atraentes.</li>';
                    extraIdeas.innerHTML += '<li>Organizadores de Mesa. Produza organizadores para materiais de escritório, como suportes para canetas, documentos ou cartões. São úteis e podem ser vendidos como acessórios de escritório.</li>';
                    extraIdeas.innerHTML += '<li>Cadernos e Pastas: Construa cadernos e pastas com capas de papelão. Adicione folhas recicladas e encaderne-os para criar produtos úteis para estudantes e profissionais.</li>';
                    educationalIdeas.innerHTML += '<li>Use em projetos de arte. Crie painéis ou molduras para exposições.</li>';
                    educationalIdeas.innerHTML += '<li>Arte e Escultura. Faça esculturas ou projetos de arte com papelão para ensinar sobre técnicas de escultura e design. Isso pode incluir desde criações abstratas até reproduções de obras famosas.</li>';
                    educationalIdeas.innerHTML += '<li>Flashcards. Faça flashcards de papelão para práticas de vocabulário, matemática ou outros tópicos, facilitando o estudo e a revisão.</li>';
                    educationalIdeas.innerHTML += '<li>Maquetes de Geografia. Crie maquetes de paisagens, continentes, ou sistemas fluviais para ensinar sobre geografia. O papelão é ideal para construir montanhas, vales, e outros recursos naturais.</li>';
                    educationalIdeas.innerHTML += '<li>Modelos de Estruturas. Construa modelos de estruturas arquitetônicas, como edifícios históricos ou pontes, para ajudar a entender engenharia e história.</li>';
                    educationalIdeas.innerHTML += '<li>Experimentos de Física. Utilize papelão para construir modelos de máquinas simples, como alavancas e polias, para demonstrar princípios básicos da física.</li>';
                    communityIdeas.innerHTML += '<li>Doe para oficinas de artesanato. Pode ser usado para criar itens de decoração ou brinquedos.</li>';
                    communityIdeas.innerHTML += '<li>Compostagem e Jardinagem: Use papelão como camada de cobertura no compostor para ajudar a controlar a umidade e adicionar carbono ao solo. Também pode ser utilizado como proteção contra ervas daninhas em hortas comunitárias.</li>';
                    communityIdeas.innerHTML += '<li>Armazenamento e Organização. Ofereça caixas de papelão para ajudar famílias a organizar seus pertences, especialmente durante mudanças ou reorganizações.</li>';
                    communityIdeas.innerHTML += '<li>Campanhas de Reciclagem: Organize campanhas para coletar e reciclar papelão, educando a comunidade sobre como separar e descartar corretamente o material.</li>';
                    break;
                case 'vidro':
                    homeIdeas.innerHTML += '<li>Transforme em potes para armazenamento. Lave e reutilize vidros de alimentos para organizar alimentos secos.</li>';
                    homeIdeas.innerHTML += '<li>Crie luminárias. Use vidros como base para criar luminárias decorativas.</li>';
                    extraIdeas.innerHTML += '<li>Venda para empresas de reciclagem. Vidro reciclado pode ser vendido para processamento.</li>';
                    educationalIdeas.innerHTML += '<li>Use em projetos científicos. Explore propriedades do vidro em experimentos.</li>';
                    communityIdeas.innerHTML += '<li>Doe para centros de reciclagem comunitária. Contribua para a reciclagem de vidro na comunidade.</li>';
                    break;
                case 'roupas':
                    homeIdeas.innerHTML += '<li>Transforme em panos de limpeza. Corte roupas velhas para criar panos de limpeza.</li>';
                    homeIdeas.innerHTML += '<li>Faça novos itens de vestuário. Reutilize roupas para criar novos acessórios ou roupas.</li>';
                    extraIdeas.innerHTML += '<li>Venda roupas usadas. Organize uma venda de garagem para roupas usadas.</li>';
                    educationalIdeas.innerHTML += '<li>Use em projetos de costura. Pratique técnicas de costura e design.</li>';
                    communityIdeas.innerHTML += '<li>Doe para organizações de caridade. Contribua com roupas para pessoas necessitadas.</li>';
                    break;
                case 'móveis':
                    homeIdeas.innerHTML += '<li>Reformar móveis antigos. Pinte ou recubra móveis para dar uma nova vida.</li>';
                    homeIdeas.innerHTML += '<li>Transforme em peças decorativas. Desmonte móveis antigos e crie itens decorativos.</li>';
                    extraIdeas.innerHTML += '<li>Venda móveis reformados. Ganhe dinheiro vendendo móveis que você reformou.</li>';
                    educationalIdeas.innerHTML += '<li>Use em projetos de marcenaria. Aprenda técnicas de marcenaria com móveis antigos.</li>';
                    communityIdeas.innerHTML += '<li>Doe para abrigos. Móveis em bom estado podem ajudar abrigos e ONGs.</li>';
                    break;
                case 'latas':
                    homeIdeas.innerHTML += '<li>Crie lanternas. Faça lanternas decorativas usando latas.</li>';
                    homeIdeas.innerHTML += '<li>Transforme em vasos. Use latas como vasos para plantas pequenas.</li>';
                    extraIdeas.innerHTML += '<li>Venda latas recicladas. Ofereça latas para empresas de reciclagem.</li>';
                    educationalIdeas.innerHTML += '<li>Use em projetos escolares. Crie projetos de arte e ciência com latas.</li>';
                    communityIdeas.innerHTML += '<li>Doe para projetos de arte comunitária. Ajude a criar arte usando latas recicladas.</li>';
                    break;
                default:
                    homeIdeas.innerHTML += `<li>Sem ideias específicas para ${product}.</li>`;
                    extraIdeas.innerHTML += `<li>Sem ideias específicas para ${product}.</li>`;
                    educationalIdeas.innerHTML += `<li>Sem ideias específicas para ${product}.</li>`;
                    communityIdeas.innerHTML += `<li>Sem ideias específicas para ${product}.</li>`;
                    break;
            }
        });

        // Mostrar todas as seções
        homeIdeas.style.display = 'block';
        extraIdeas.style.display = 'block';
        educationalIdeas.style.display = 'block';
        communityIdeas.style.display = 'block';
    }

    addProductButton.addEventListener('click', addProductField);
    submitProductButton.addEventListener('click', showIdeas);

    // Evento para remover campos de produtos existentes
    document.querySelectorAll('.removeProduct').forEach(button => {
        button.addEventListener('click', function() {
            productFields.removeChild(button.parentElement);
        });
    });
});