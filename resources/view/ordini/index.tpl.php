<h2>Elenco Ordini del <strong><?php echo "Gruppo"; ?></strong></h2>

<div id="content_list1">
<?php if(count($this->list) > 0): ?>

    <div id="list_box">
    <?php foreach ($this->list as $key => $ordine):
            ?>
        <div class="box_row" id="box_<?php echo $ordine->idordine;?>">
        <?php if(!$ordine->statusObj->is_Pianificato()): ?>
            <div class="sub_menu" style="margin-top: 40px;">
                <a class="menu" href="/ordini/prodotti/idordine/<?php echo $ordine->idordine;?>">
            <?php if($ordine->statusObj->is_Aperto()): ?>
                    Ordina ora!
            <?php else: ?>
                    Visualizza dettaglio
            <?php endif; ?>
                </a>
            </div>
        <?php endif; ?>

            <h3 class="dom_title">Ordine per <strong><?php echo $ordine->ragsoc;?></strong></h3>
        <?php if($ordine->statusObj->is_Pianificato()): ?>
            <h4 class="ordine <?php echo $ordine->statusObj->getStatus(); ?>">
                <?php echo $ordine->statusObj->getStatus(); ?>
                per il <strong><?php echo $this->date($ordine->data_inizio, '%d/%m/%Y');?></strong>
            </h4>
        <?php elseif($ordine->statusObj->is_Aperto()): ?>
            <h4 class="ordine <?php echo $ordine->statusObj->getStatus(); ?>"><?php echo $ordine->statusObj->getStatus(); ?></h4>            
            <p>
                Chiusura prevista il <strong><?php echo $this->date($ordine->data_fine, '%d/%m/%Y');?></strong> alle <?php echo $this->date($ordine->data_fine, '%H:%M:%S');?></strong>
            </p>
        <?php elseif($ordine->statusObj->is_Chiuso()): ?>
            <h4 class="ordine <?php echo $ordine->statusObj->getStatus(); ?>">
                <?php echo $ordine->statusObj->getStatus(); ?>
                il <strong><?php echo $this->date($ordine->data_fine, '%d/%m/%Y');?></strong>
            </h4>
        <?php elseif($ordine->statusObj->is_Archiviato()): ?>
            <h4 class="ordine <?php echo $ordine->statusObj->getStatus(); ?>"><?php echo $ordine->statusObj->getStatus(); ?></h4>            
            <p>
                <em>Apertura</em>: <strong><?php echo $this->date($ordine->data_inizio, '%d/%m/%Y');?></strong> alle <?php echo $this->date($ordine->data_inizio, '%H:%M:%S');?></strong><br />
                <em>Chiusura</em>: <strong><?php echo $this->date($ordine->data_fine, '%d/%m/%Y');?></strong> alle <?php echo $this->date($ordine->data_fine, '%H:%M:%S');?></strong>
            </p>
        <?php endif; ?>

        </div>
    <?php endforeach; ?>
    </div>

<?php else: ?>
    <h3>Nessun ordine per questo produttore!</h3>
<?php endif; ?>
</div>
