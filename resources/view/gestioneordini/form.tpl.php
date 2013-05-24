<form id="ordineform" action="<?php echo $this->form->getAction(); ?>" method="post" class="f1n200">

    <fieldset class="border_top">
        <legend>Validità ordine</legend>
        <?php echo $this->form->renderField('data_inizio'); ?>
        <?php echo $this->form->renderField('data_fine'); ?>
        <?php echo $this->form->renderField('archiviato'); ?>
    </fieldset>

    <fieldset class="border_top">
        <legend>Note</legend>
        <?php echo $this->form->renderField('note_consegna'); ?>
    </fieldset>

        <?php echo $this->form->renderField('idgp'); ?>

        <input type="submit" id="submit" value="SALVA" />

</form>
<script>
    $(function() {
        $( "#data_inizio" ).datepicker({ dateFormat: "dd/mm/yy" });
        $( "#data_fine" ).datepicker({ dateFormat: "dd/mm/yy" });
    });
</script>