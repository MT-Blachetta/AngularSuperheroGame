decreaseValue(bid: string) {

    switch(bid) {
      case "power":
        this.formState.power = Math.max(this.formState.power-1,0);
        this.supForm.patchValue({power: this.formState.power});
        break;
      case "strength":
        this.formState.strength = Math.max(this.formState.strength-1,0);
        this.supForm.patchValue({strength: this.formState.strength});
        break;
      case "intelligence":
        this.formState.intelligence = Math.max(this.formState.intelligence-1,0);
        this.supForm.patchValue({intelligence: this.formState.intelligence});
        break;
      case "healthMax":
        this.formState.healthMax = Math.max(this.formState.healthMax-1,0);
        this.supForm.patchValue({healthMax: this.formState.healthMax});       
        break;
      case "shieldMax":
        this.formState.shieldMax = Math.max(this.formState.shieldMax-1,0);
        this.supForm.patchValue({shieldMax: this.formState.shieldMax});
        break;
      case "currentDamage":
        this.formState.currentDamage = Math.max(this.formState.currentDamage-1,0);
        this.supForm.patchValue({currentDamage: this.formState.currentDamage});
        break;
      default:
        console.error("change of value failed");

    }

  }

  increaseValue(bid: string) {

    switch(bid) {
      case "power":
        this.formState.power = this.formState.power+1
        this.supForm.patchValue({power: this.formState.power});
        break;
      case "strength":
        this.formState.strength = this.formState.strength+1
        this.supForm.patchValue({strength: this.formState.strength});
        break;
      case "intelligence":
        this.formState.intelligence = this.formState.intelligence+1
        this.supForm.patchValue({intelligence: this.formState.intelligence});
        break;
      case "healthMax":
        this.formState.healthMax = this.formState.healthMax+1
        this.supForm.patchValue({healthMax: this.formState.healthMax});       
        break;
      case "shieldMax":
        this.formState.shieldMax = this.formState.shieldMax+1
        this.supForm.patchValue({shieldMax: this.formState.shieldMax});
        break;
      case "currentDamage":
        this.formState.currentDamage = this.formState.currentDamage+1
        this.supForm.patchValue({currentDamage: this.formState.currentDamage});
        break;
      default:
        console.error("change of value failed");

    }

  }

