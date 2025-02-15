/* --------------------------------------------------------------------- */
/*                           UTILISATION                                 */
/* --------------------------------------------------------------------- */
/* 

    syntaxe : 
        SetCSSVariables(object)

        Object contient toute les variables qui vont etre utiliser et pour les cles dont la valeur est un autre object,
        le dit object sera decomposer et les variables a l'interieur recevront en prefixe le nom de la cle correspondate
        
    Exemple:
        pour ce dictionnaire de valeur :
            {
                variable01: valeur01,
                variablr02: {
                        sousVar01: valeur02,
                        sousVar02: valeur03
                    }
            }
        
        et le retour sera :
            --variable01: valeur01;
            --variable02-sousVar01: valeur02;
            --variable02-sousVar02: valeur03;
*/


/**
 * 
 * @param {Object} data 
 */
function SetCSSVariabes(data, prefix = ''){
    let CSSString = ""
    for(const key in data){
        if(data.hasOwnProperty(key)){
            const newKey = `${prefix}${key}`.replace(/\s+/g, '-'); //remplacements des espaces dun nom de la variable par des tiret

            if(typeof(data[key])==='object' && data[key] !== null){
                CSSString += SetCSSVariabes(data[key], `${newKey}-`);
            }else{
                CSSString += `--${newKey}: ${data[key]}; \n`;
            }
        }
    }

    return CSSString
}

/**
 * 
 * @param {String} path - path of json file
 */
function defineVariable(path){
    fetch(path)
        .then(response => response.json())
        .then(data => {
            styles = SetCSSVariabes(data)
            var tag = document.createElement("style")
            tag.setAttribute("id", "style-sh19735003")
            tag.innerHTML = `
            :root{
                ${styles}
            }
            `
            document.querySelector("head").prepend(tag)
        })
}



class ThemeCLI {
    /**
     * 
     * @param {Object} themes
     * tous les themes avec les fichiers json correspondant
     * -utiliser l'attribut mode="theme" dans la balise body pour inclure un theme defini au prealable
     */
    constructor(Themes) {
        this.themes = Themes
    }

    async #loadFile(){
        this.Modes = {}
        for(const theme in Themes){
            await fetch(Themes[theme])
            .then(async response => await response.json())
            .then(async data =>{
                this.Modes[theme] = await SetCSSVariabes(data)
            })
        }
    }
    async updateTheme(){
        await this.#loadFile()
        this.mode = document.body.getAttribute("mode")
        if(this.mode in this.Modes){
            
            if(document.querySelector("style.st-sh19735003") != null){
                var styleTag = document.querySelector("style.st-sh19735003")
                styleTag.innerHTML = ""
            }else{
                var styleTag = document.createElement("style")
                styleTag.classList.add("st-sh19735003")
                document.documentElement.prepend(styleTag)
            }

            styleTag.innerHTML = `
            :root{
                ${this.Modes[this.mode]}
            }
            `
        }else{
            console.error(`"${this.mode}" is not defined: use setTheme()`)
        }
    }
}


var Themes = {
    light: `${window.location.origin}/style/theme-light.json`,
    dark: `${window.location.origin}/style/theme-dark.json`
}
var ThemeManager = new ThemeCLI(Themes)
ThemeManager.updateTheme()