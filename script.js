// 🔴 SEU NÚMERO DE WHATSAPP - ANGOLA 🇦🇴
// Código: +244 (Angola) | Número: 923725236
const SEU_NUMERO_WHATSAPP = '244923725236'; // <-- JÁ CONFIGURADO!

// Selecionar o formulário
const form = document.getElementById('appointmentForm');

// Adicionar evento de envio
form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Coletar dados do formulário
    const nome = document.getElementById('nome').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const servico = document.getElementById('servico').value;
    const data = document.getElementById('data').value;
    const horario = document.getElementById('horario').value;
    const endereco = document.getElementById('endereco').value.trim();
    const veiculo = document.getElementById('veiculo').value.trim();
    const obs = document.getElementById('obs').value.trim();
    
    // Validar campos obrigatórios
    if (!nome || !telefone || !servico || !data || !horario || !endereco) {
        alert('⚠️ Por favor, preencha todos os campos obrigatórios!');
        return;
    }
    
    // Validar telefone (mínimo 9 dígitos para Angola)
    const telefoneLimpo = telefone.replace(/\D/g, '');
    if (telefoneLimpo.length < 9) {
        alert('⚠️ Por favor, insira um número de WhatsApp válido (ex: 923725236)');
        return;
    }
    
    // Formatar a data (YYYY-MM-DD para DD/MM/YYYY)
    const dataFormatada = formatarData(data);
    
    // Construir mensagem para o WhatsApp (com emojis e formatação)
    let mensagem = `📅 *NOVO AGENDAMENTO - CRHIS CLEAN* 📅%0A%0A`;
    mensagem += `👤 *Cliente:* ${nome}%0A`;
    mensagem += `📞 *WhatsApp:* ${telefone}%0A`;
    mensagem += `🔧 *Serviço:* ${servico}%0A`;
    mensagem += `📆 *Data:* ${dataFormatada}%0A`;
    mensagem += `⏰ *Horário:* ${horario}%0A`;
    mensagem += `📍 *Endereço:* ${endereco}%0A`;
    
    if (veiculo) {
        mensagem += `🚗 *Veículo:* ${veiculo}%0A`;
    }
    
    if (obs) {
        mensagem += `📝 *Observações:* ${obs}%0A`;
    }
    
    mensagem += `%0A✅ *Status:* Aguardando confirmação da CRHIS CLEAN%0A`;
    mensagem += `%0A*Conforto e Bem-Estar para você!* 🧼✨`;
    
    // Criar link do WhatsApp com seu número
    const whatsappURL = `https://api.whatsapp.com/send?phone=${SEU_NUMERO_WHATSAPP}&text=${mensagem}`;
    
    // Abrir WhatsApp (web ou app)
    window.open(whatsappURL, '_blank');
    
    // Mostrar mensagem de sucesso
    alert(`✅ Agendamento enviado com sucesso, ${nome}!\n\nVocê será redirecionado para o WhatsApp.\nA CRHIS CLEAN confirmará seu horário em breve.\n\nConforto e Bem-Estar para você! 🧼✨`);
    
    // Opcional: limpar formulário após envio (descomente se quiser)
    // form.reset();
});

// Função para formatar data
function formatarData(dataISO) {
    const [ano, mes, dia] = dataISO.split('-');
    return `${dia}/${mes}/${ano}`;
}

// Máscara para o campo de telefone (formato Angola)
document.getElementById('telefone').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    
    // Limitar a 9 dígitos (Angola)
    if (value.length > 9) value = value.slice(0, 9);
    
    // Aplicar máscara: 923 725 236
    if (value.length >= 3) {
        value = `${value.slice(0, 3)} ${value.slice(3)}`;
    }
    if (value.length >= 7) {
        value = `${value.slice(0, 7)} ${value.slice(7)}`;
    }
    
    e.target.value = value;
});

// Impedir seleção de datas passadas
const dataInput = document.getElementById('data');
const hoje = new Date();
const ano = hoje.getFullYear();
const mes = String(hoje.getMonth() + 1).padStart(2, '0');
const dia = String(hoje.getDate()).padStart(2, '0');
dataInput.min = `${ano}-${mes}-${dia}`;

// Impedir seleção de domingos (opcional - você pode remover se quiser atender domingo)
dataInput.addEventListener('change', function() {
    const dataSelecionada = new Date(this.value);
    const diaSemana = dataSelecionada.getDay();
    if (diaSemana === 0) {
        alert('⚠️ A CRHIS CLEAN não atende aos domingos. Por favor, escolha outro dia.');
        this.value = '';
    }
});

// Efeito de foco nos campos (feedback visual)
const inputs = document.querySelectorAll('input, select, textarea');
inputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'translateX(5px)';
    });
    input.addEventListener('blur', function() {
        this.parentElement.style.transform = 'translateX(0)';
    });
});
