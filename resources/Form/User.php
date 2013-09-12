<?php
/**
 * Description of Form_User
 * 
 * @author gullo
 */
class Form_User extends MyFw_Form {
    
    function __construct() {
        parent::__construct();
    }
    
    function createFields() {
        
        $this->addField('nome', array(
                        'type'      => 'input',
                        'label'     => 'Nome',
                        'size'      => 30,
                        'maxlength' => 45,
                        'required'  => true
            ));
        $this->addField('cognome', array(
                        'type'      => 'input',
                        'label'     => 'Cognome',
                        'size'      => 30,
                        'maxlength' => 45,
                        'required'  => true
            ));

        $this->addField('num_members', array(
                        'type'      => 'input',
                        'label'     => 'Num. nucleo familiare',
                        'size'      => 10,
                        'maxlength' => 2,
                        'required'  => true
            ));

        $this->addField('email', array(
                        'type'      => 'input',
                        'label'     => 'Email',
                        'size'      => 40,
                        'maxlength' => 100,
                        'required'  => true
            ));

        $this->addField('password', array(
                        'type'      => 'password',
                        'label'     => 'Password',
                        'size'      => 20,
                        'maxlength' => 12,
                        'required'  => true
            ));

        $this->addField('password2', array(
                        'type'      => 'password',
                        'label'     => 'Ripeti Password',
                        'size'      => 20,
                        'maxlength' => 12,
                        'required'  => true
            ));

        // GRUPPI
        $objGr = new Model_Groups();
        $arVal = $objGr->convertToSingleArray($objGr->getAll(), "idgroup", "nome");
        $arVal[0] = 'Seleziona...';
        $this->addField('idgroup', array(
                        'type'      => 'select',
                        'label'     => 'Gruppo',
                        'options'   => $arVal,
                        'required'  => true
            ));
        
        // Hidden field iduser
        $this->addField('iduser', array( 'type' => 'hidden' ));
        
        
        // USERS_GROUP fields
        $this->addField('attivo', array(
                    'type'      => 'select',
                    'label'     => 'Abilitato',
                    'options'   => array('S' => 'SI', 'N' => 'NO'),
                    'required'  => true
        ));
        $this->addField('fondatore', array(
                    'type'      => 'select',
                    'label'     => 'Fondatore',
                    'options'   => array('S' => 'SI', 'N' => 'NO'),
                    'required'  => true
        ));
        $this->addField('contabile', array(
                    'type'      => 'select',
                    'label'     => 'Contabile',
                    'options'   => array('S' => 'SI', 'N' => 'NO'),
                    'required'  => true
        ));
        

    }
}