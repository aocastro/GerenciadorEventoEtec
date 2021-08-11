CREATE TABLE IF NOT EXISTS `tipo` (
  `idTipo` INT NOT NULL AUTO_INCREMENT,
  `nomeTipo` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`idTipo`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `participante` (
  `idParticipante` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(55) NOT NULL,
  `cpf` VARCHAR(20) NOT NULL,
  `telefone` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `senha` VARCHAR(100) NOT NULL,
  `idTipo` INT NOT NULL,
  PRIMARY KEY (`idParticipante`),
  UNIQUE INDEX `Id_UNIQUE` (`cpf` ASC),
  INDEX `fk_participante_tipo1_idx` (`idTipo` ASC),
  CONSTRAINT `fk_participante_tipo1`
    FOREIGN KEY (`idTipo`)
    REFERENCES `tipo` (`idTipo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `fornecedor` (
  `idFornecedor` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `endereco` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `tipo` INT NOT NULL,
  `telefone` VARCHAR(15) COLLATE 'utf8_unicode_ci' NOT NULL,
  `cep` VARCHAR(10) NOT NULL,
  `numero` INT NOT NULL,
  PRIMARY KEY (`idFornecedor`))
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `evento` (
  `idEvento` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `data` DATE NOT NULL,
  `horaInicio` TIME NOT NULL,
  `horaFim` TIME NOT NULL,
  `descricaoEvento` LONGTEXT NOT NULL,
  `situacao` CHAR(1) NOT NULL,
  `certificacao` TINYINT NOT NULL,
  PRIMARY KEY (`idEvento`))
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `checklist` (
  `idChecklist` INT NOT NULL AUTO_INCREMENT,
  `objeto` VARCHAR(45) NOT NULL,
  `tarefa` LONGTEXT NOT NULL,
  PRIMARY KEY (`idChecklist`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `servico` (
  `idProduto` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `evento` INT NOT NULL,
  `fornecedor` INT NOT NULL,
  INDEX `fk_Eventos_has_Fornecedor_Fornecedor1_idx` (`fornecedor` ASC),
  INDEX `fk_Eventos_has_Fornecedor_Eventos1_idx` (`evento` ASC),
  PRIMARY KEY (`idProduto`),
  CONSTRAINT `fk_Eventos_has_Fornecedor_Eventos1`
    FOREIGN KEY (`evento`)
    REFERENCES `evento` (`idEvento`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Eventos_has_Fornecedor_Fornecedor1`
    FOREIGN KEY (`fornecedor`)
    REFERENCES `fornecedor` (`idFornecedor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `endereco` (
  `idEndereco` INT NOT NULL AUTO_INCREMENT,
  `rua` VARCHAR(45) NOT NULL,
  `bairro` VARCHAR(45) NOT NULL,
  `cidade` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idEndereco`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `evento_has_checklist` (
  `idEvento` INT NOT NULL AUTO_INCREMENT,
  `idChecklist` INT NOT NULL,
  PRIMARY KEY (`idEvento`, `idChecklist`),
  INDEX `fk_evento_has_checklist_checklist1_idx` (`idChecklist` ASC),
  INDEX `fk_evento_has_checklist_evento1_idx` (`idEvento` ASC),
  CONSTRAINT `fk_evento_has_checklist_evento1`
    FOREIGN KEY (`idEvento`)
    REFERENCES `evento` (`idEvento`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_evento_has_checklist_checklist1`
    FOREIGN KEY (`idChecklist`)
    REFERENCES `checklist` (`idChecklist`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `inscricao` (
  `idEvento` INT NOT NULL AUTO_INCREMENT,
  `idParticipante` INT NOT NULL,
  `dataInscricao` DATE NOT NULL,
  `horaInscricao` TIME NOT NULL,
  PRIMARY KEY (`idEvento`, `idParticipante`),
  INDEX `fk_evento_has_participante_participante1_idx` (`idParticipante` ASC),
  INDEX `fk_evento_has_participante_evento1_idx` (`idEvento` ASC),
  CONSTRAINT `fk_evento_has_participante_evento1`
    FOREIGN KEY (`idEvento`)
    REFERENCES `evento` (`idEvento`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_evento_has_participante_participante1`
    FOREIGN KEY (`idParticipante`)
    REFERENCES `participante` (`idParticipante`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;