$(document).ready(function(){ 
    carregarTarefa();
    $('#add_tarefa_btn').on('click',function(){
        var tarefaText = $('#tarefa_input').val();
        if (tarefaText.length > 0){
            adicionarTarefa(tarefaText)
            $('#tarefa_input').val('')
            salvarTarefas();
        }
        
    });
    function adicionarTarefa(text){
          $('#tarefa_lista').append('<li>' +
        '<input type="checkbox" class="checkbox-tarefa">' +
        '<div class="tarefa-text">' + text + '</div>' + // Contêiner para o texto da tarefa
        '<span>&times;</span>' + // O "X" para remover a tarefa
    '</li>'
      );
    }
     
    $(document).on('click', 'li',function(){
        $(this).toggleClass('input')
        salvarTarefas();
    });
    $(document).on('click', 'span',function(e){
        e.stopPropagation();
        $(this).parent().fadeOut(500,function(){
            $(this).remove();
            salvarTarefas();
        })
      
    });

    function salvarTarefas(){
        var tarefas = $('#tarefa_lista').html();
        localStorage.setItem('tarefas',tarefas);
    
    }

    function carregarTarefa(){
        var tarefas = localStorage.getItem('tarefas')
        if(tarefas){
            $('#tarefa_lista').html(tarefas);
        }
    }
    $(document).on('mouseenter','span',function(){
        $(this).css('background-color', '');
        $(this).css('color', 'whiter');
       
    });
    $(document).on('mouseenter','span',function(){
        $(this).css('color', 'whiter');
        $(this).css('background-color', 'red');

    })
    $(document).on('mouseleave','span',function(){
        $(this).css('color', '');
        $(this).css('background-color', '');
    }); 
   
});
