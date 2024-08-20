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
                    extraIdeas.innerHTML += '<li>Crie artesanato para venda. Use garrafas PET para fazer enfeites e brinquedos.</li>';
                    educationalIdeas.innerHTML += '<li>Use em projetos escolares. Crie modelos de estruturas ou maquetes.</li>';
                    communityIdeas.innerHTML += '<li>Distribua para projetos comunitários de jardinagem. Pode ser usado para plantar mudas.</li>';
                    break;
                case 'papelão':
                    homeIdeas.innerHTML += '<li>Faça caixas organizadoras. Dobre e cole o papelão para criar caixas de armazenamento.</li>';
                    homeIdeas.innerHTML += '<li>Crie divisórias para gavetas. Corte e ajuste o papelão para organizar gavetas.</li>';
                    extraIdeas.innerHTML += '<li>Faça brinquedos reciclados. Monte brinquedos simples para crianças.</li>';
                    educationalIdeas.innerHTML += '<li>Use em projetos de arte. Crie painéis ou molduras para exposições.</li>';
                    communityIdeas.innerHTML += '<li>Doe para oficinas de artesanato. Pode ser usado para criar itens de decoração ou brinquedos.</li>';
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