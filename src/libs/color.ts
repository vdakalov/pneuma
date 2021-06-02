
export default class Color {
  public static Transparent = new Color(0, 0, 0, 0);
  public static Red50: Color = Color.fromHexString('#FFEBEE');
  public static Red100: Color = Color.fromHexString('#FFCDD2');
  public static Red200: Color = Color.fromHexString('#EF9A9A');
  public static Red300: Color = Color.fromHexString('#E57373');
  public static Red400: Color = Color.fromHexString('#EF5350');
  public static Red500: Color = Color.fromHexString('#F44336');
  public static Red600: Color = Color.fromHexString('#E53935');
  public static Red700: Color = Color.fromHexString('#D32F2F');
  public static Red800: Color = Color.fromHexString('#C62828');
  public static Red900: Color = Color.fromHexString('#B71C1C');
  public static RedA100: Color = Color.fromHexString('#FF8A80');
  public static RedA200: Color = Color.fromHexString('#FF5252');
  public static RedA400: Color = Color.fromHexString('#FF1744');
  public static RedA700: Color = Color.fromHexString('#D50000');
  public static Pink50: Color = Color.fromHexString('#FCE4EC');
  public static Pink100: Color = Color.fromHexString('#F8BBD0');
  public static Pink200: Color = Color.fromHexString('#F48FB1');
  public static Pink300: Color = Color.fromHexString('#F06292');
  public static Pink400: Color = Color.fromHexString('#EC407A');
  public static Pink500: Color = Color.fromHexString('#E91E63');
  public static Pink600: Color = Color.fromHexString('#D81B60');
  public static Pink700: Color = Color.fromHexString('#C2185B');
  public static Pink800: Color = Color.fromHexString('#AD1457');
  public static Pink900: Color = Color.fromHexString('#880E4F');
  public static PinkA100: Color = Color.fromHexString('#FF80AB');
  public static PinkA200: Color = Color.fromHexString('#FF4081');
  public static PinkA400: Color = Color.fromHexString('#F50057');
  public static PinkA700: Color = Color.fromHexString('#C51162');
  public static Purple50: Color = Color.fromHexString('#F3E5F5');
  public static Purple100: Color = Color.fromHexString('#E1BEE7');
  public static Purple200: Color = Color.fromHexString('#CE93D8');
  public static Purple300: Color = Color.fromHexString('#BA68C8');
  public static Purple400: Color = Color.fromHexString('#AB47BC');
  public static Purple500: Color = Color.fromHexString('#9C27B0');
  public static Purple600: Color = Color.fromHexString('#8E24AA');
  public static Purple700: Color = Color.fromHexString('#7B1FA2');
  public static Purple800: Color = Color.fromHexString('#6A1B9A');
  public static Purple900: Color = Color.fromHexString('#4A148C');
  public static PurpleA100: Color = Color.fromHexString('#EA80FC');
  public static PurpleA200: Color = Color.fromHexString('#E040FB');
  public static PurpleA400: Color = Color.fromHexString('#D500F9');
  public static PurpleA700: Color = Color.fromHexString('#AA00FF');
  public static DeepPurple50: Color = Color.fromHexString('#EDE7F6');
  public static DeepPurple100: Color = Color.fromHexString('#D1C4E9');
  public static DeepPurple200: Color = Color.fromHexString('#B39DDB');
  public static DeepPurple300: Color = Color.fromHexString('#9575CD');
  public static DeepPurple400: Color = Color.fromHexString('#7E57C2');
  public static DeepPurple500: Color = Color.fromHexString('#673AB7');
  public static DeepPurple600: Color = Color.fromHexString('#5E35B1');
  public static DeepPurple700: Color = Color.fromHexString('#512DA8');
  public static DeepPurple800: Color = Color.fromHexString('#4527A0');
  public static DeepPurple900: Color = Color.fromHexString('#311B92');
  public static DeepPurpleA100: Color = Color.fromHexString('#B388FF');
  public static DeepPurpleA200: Color = Color.fromHexString('#7C4DFF');
  public static DeepPurpleA400: Color = Color.fromHexString('#651FFF');
  public static DeepPurpleA700: Color = Color.fromHexString('#6200EA');
  public static Indigo50: Color = Color.fromHexString('#E8EAF6');
  public static Indigo100: Color = Color.fromHexString('#C5CAE9');
  public static Indigo200: Color = Color.fromHexString('#9FA8DA');
  public static Indigo300: Color = Color.fromHexString('#7986CB');
  public static Indigo400: Color = Color.fromHexString('#5C6BC0');
  public static Indigo500: Color = Color.fromHexString('#3F51B5');
  public static Indigo600: Color = Color.fromHexString('#3949AB');
  public static Indigo700: Color = Color.fromHexString('#303F9F');
  public static Indigo800: Color = Color.fromHexString('#283593');
  public static Indigo900: Color = Color.fromHexString('#1A237E');
  public static IndigoA100: Color = Color.fromHexString('#8C9EFF');
  public static IndigoA200: Color = Color.fromHexString('#536DFE');
  public static IndigoA400: Color = Color.fromHexString('#3D5AFE');
  public static IndigoA700: Color = Color.fromHexString('#304FFE');
  public static Blue50: Color = Color.fromHexString('#E3F2FD');
  public static Blue100: Color = Color.fromHexString('#BBDEFB');
  public static Blue200: Color = Color.fromHexString('#90CAF9');
  public static Blue300: Color = Color.fromHexString('#64B5F6');
  public static Blue400: Color = Color.fromHexString('#42A5F5');
  public static Blue500: Color = Color.fromHexString('#2196F3');
  public static Blue600: Color = Color.fromHexString('#1E88E5');
  public static Blue700: Color = Color.fromHexString('#1976D2');
  public static Blue800: Color = Color.fromHexString('#1565C0');
  public static Blue900: Color = Color.fromHexString('#0D47A1');
  public static BlueA100: Color = Color.fromHexString('#82B1FF');
  public static BlueA200: Color = Color.fromHexString('#448AFF');
  public static BlueA400: Color = Color.fromHexString('#2979FF');
  public static BlueA700: Color = Color.fromHexString('#2962FF');
  public static LightBlue50: Color = Color.fromHexString('#E1F5FE');
  public static LightBlue100: Color = Color.fromHexString('#B3E5FC');
  public static LightBlue200: Color = Color.fromHexString('#81D4FA');
  public static LightBlue300: Color = Color.fromHexString('#4FC3F7');
  public static LightBlue400: Color = Color.fromHexString('#29B6F6');
  public static LightBlue500: Color = Color.fromHexString('#03A9F4');
  public static LightBlue600: Color = Color.fromHexString('#039BE5');
  public static LightBlue700: Color = Color.fromHexString('#0288D1');
  public static LightBlue800: Color = Color.fromHexString('#0277BD');
  public static LightBlue900: Color = Color.fromHexString('#01579B');
  public static LightBlueA100: Color = Color.fromHexString('#80D8FF');
  public static LightBlueA200: Color = Color.fromHexString('#40C4FF');
  public static LightBlueA400: Color = Color.fromHexString('#00B0FF');
  public static LightBlueA700: Color = Color.fromHexString('#0091EA');
  public static Cyan50: Color = Color.fromHexString('#E0F7FA');
  public static Cyan100: Color = Color.fromHexString('#B2EBF2');
  public static Cyan200: Color = Color.fromHexString('#80DEEA');
  public static Cyan300: Color = Color.fromHexString('#4DD0E1');
  public static Cyan400: Color = Color.fromHexString('#26C6DA');
  public static Cyan500: Color = Color.fromHexString('#00BCD4');
  public static Cyan600: Color = Color.fromHexString('#00ACC1');
  public static Cyan700: Color = Color.fromHexString('#0097A7');
  public static Cyan800: Color = Color.fromHexString('#00838F');
  public static Cyan900: Color = Color.fromHexString('#006064');
  public static CyanA100: Color = Color.fromHexString('#84FFFF');
  public static CyanA200: Color = Color.fromHexString('#18FFFF');
  public static CyanA400: Color = Color.fromHexString('#00E5FF');
  public static CyanA700: Color = Color.fromHexString('#00B8D4');
  public static Teal50: Color = Color.fromHexString('#E0F2F1');
  public static Teal100: Color = Color.fromHexString('#B2DFDB');
  public static Teal200: Color = Color.fromHexString('#80CBC4');
  public static Teal300: Color = Color.fromHexString('#4DB6AC');
  public static Teal400: Color = Color.fromHexString('#26A69A');
  public static Teal500: Color = Color.fromHexString('#009688');
  public static Teal600: Color = Color.fromHexString('#00897B');
  public static Teal700: Color = Color.fromHexString('#00796B');
  public static Teal800: Color = Color.fromHexString('#00695C');
  public static Teal900: Color = Color.fromHexString('#004D40');
  public static TealA100: Color = Color.fromHexString('#A7FFEB');
  public static TealA200: Color = Color.fromHexString('#64FFDA');
  public static TealA400: Color = Color.fromHexString('#1DE9B6');
  public static TealA700: Color = Color.fromHexString('#00BFA5');
  public static Green50: Color = Color.fromHexString('#E8F5E9');
  public static Green100: Color = Color.fromHexString('#C8E6C9');
  public static Green200: Color = Color.fromHexString('#A5D6A7');
  public static Green300: Color = Color.fromHexString('#81C784');
  public static Green400: Color = Color.fromHexString('#66BB6A');
  public static Green500: Color = Color.fromHexString('#4CAF50');
  public static Green600: Color = Color.fromHexString('#43A047');
  public static Green700: Color = Color.fromHexString('#388E3C');
  public static Green800: Color = Color.fromHexString('#2E7D32');
  public static Green900: Color = Color.fromHexString('#1B5E20');
  public static GreenA100: Color = Color.fromHexString('#B9F6CA');
  public static GreenA200: Color = Color.fromHexString('#69F0AE');
  public static GreenA400: Color = Color.fromHexString('#00E676');
  public static GreenA700: Color = Color.fromHexString('#00C853');
  public static LightGreen50: Color = Color.fromHexString('#F1F8E9');
  public static LightGreen100: Color = Color.fromHexString('#DCEDC8');
  public static LightGreen200: Color = Color.fromHexString('#C5E1A5');
  public static LightGreen300: Color = Color.fromHexString('#AED581');
  public static LightGreen400: Color = Color.fromHexString('#9CCC65');
  public static LightGreen500: Color = Color.fromHexString('#8BC34A');
  public static LightGreen600: Color = Color.fromHexString('#7CB342');
  public static LightGreen700: Color = Color.fromHexString('#689F38');
  public static LightGreen800: Color = Color.fromHexString('#558B2F');
  public static LightGreen900: Color = Color.fromHexString('#33691E');
  public static LightGreenA100: Color = Color.fromHexString('#CCFF90');
  public static LightGreenA200: Color = Color.fromHexString('#B2FF59');
  public static LightGreenA400: Color = Color.fromHexString('#76FF03');
  public static LightGreenA700: Color = Color.fromHexString('#64DD17');
  public static Lime50: Color = Color.fromHexString('#F9FBE7');
  public static Lime100: Color = Color.fromHexString('#F0F4C3');
  public static Lime200: Color = Color.fromHexString('#E6EE9C');
  public static Lime300: Color = Color.fromHexString('#DCE775');
  public static Lime400: Color = Color.fromHexString('#D4E157');
  public static Lime500: Color = Color.fromHexString('#CDDC39');
  public static Lime600: Color = Color.fromHexString('#C0CA33');
  public static Lime700: Color = Color.fromHexString('#AFB42B');
  public static Lime800: Color = Color.fromHexString('#9E9D24');
  public static Lime900: Color = Color.fromHexString('#827717');
  public static LimeA100: Color = Color.fromHexString('#F4FF81');
  public static LimeA200: Color = Color.fromHexString('#EEFF41');
  public static LimeA400: Color = Color.fromHexString('#C6FF00');
  public static LimeA700: Color = Color.fromHexString('#AEEA00');
  public static Yellow50: Color = Color.fromHexString('#FFFDE7');
  public static Yellow100: Color = Color.fromHexString('#FFF9C4');
  public static Yellow200: Color = Color.fromHexString('#FFF59D');
  public static Yellow300: Color = Color.fromHexString('#FFF176');
  public static Yellow400: Color = Color.fromHexString('#FFEE58');
  public static Yellow500: Color = Color.fromHexString('#FFEB3B');
  public static Yellow600: Color = Color.fromHexString('#FDD835');
  public static Yellow700: Color = Color.fromHexString('#FBC02D');
  public static Yellow800: Color = Color.fromHexString('#F9A825');
  public static Yellow900: Color = Color.fromHexString('#F57F17');
  public static YellowA100: Color = Color.fromHexString('#FFFF8D');
  public static YellowA200: Color = Color.fromHexString('#FFFF00');
  public static YellowA400: Color = Color.fromHexString('#FFEA00');
  public static YellowA700: Color = Color.fromHexString('#FFD600');
  public static Amber50: Color = Color.fromHexString('#FFF8E1');
  public static Amber100: Color = Color.fromHexString('#FFECB3');
  public static Amber200: Color = Color.fromHexString('#FFE082');
  public static Amber300: Color = Color.fromHexString('#FFD54F');
  public static Amber400: Color = Color.fromHexString('#FFCA28');
  public static Amber500: Color = Color.fromHexString('#FFC107');
  public static Amber600: Color = Color.fromHexString('#FFB300');
  public static Amber700: Color = Color.fromHexString('#FFA000');
  public static Amber800: Color = Color.fromHexString('#FF8F00');
  public static Amber900: Color = Color.fromHexString('#FF6F00');
  public static AmberA100: Color = Color.fromHexString('#FFE57F');
  public static AmberA200: Color = Color.fromHexString('#FFD740');
  public static AmberA400: Color = Color.fromHexString('#FFC400');
  public static AmberA700: Color = Color.fromHexString('#FFAB00');
  public static Orange50: Color = Color.fromHexString('#FFF3E0');
  public static Orange100: Color = Color.fromHexString('#FFE0B2');
  public static Orange200: Color = Color.fromHexString('#FFCC80');
  public static Orange300: Color = Color.fromHexString('#FFB74D');
  public static Orange400: Color = Color.fromHexString('#FFA726');
  public static Orange500: Color = Color.fromHexString('#FF9800');
  public static Orange600: Color = Color.fromHexString('#FB8C00');
  public static Orange700: Color = Color.fromHexString('#F57C00');
  public static Orange800: Color = Color.fromHexString('#EF6C00');
  public static Orange900: Color = Color.fromHexString('#E65100');
  public static OrangeA100: Color = Color.fromHexString('#FFD180');
  public static OrangeA200: Color = Color.fromHexString('#FFAB40');
  public static OrangeA400: Color = Color.fromHexString('#FF9100');
  public static OrangeA700: Color = Color.fromHexString('#FF6D00');
  public static DeepOrange50: Color = Color.fromHexString('#FBE9E7');
  public static DeepOrange100: Color = Color.fromHexString('#FFCCBC');
  public static DeepOrange200: Color = Color.fromHexString('#FFAB91');
  public static DeepOrange300: Color = Color.fromHexString('#FF8A65');
  public static DeepOrange400: Color = Color.fromHexString('#FF7043');
  public static DeepOrange500: Color = Color.fromHexString('#FF5722');
  public static DeepOrange600: Color = Color.fromHexString('#F4511E');
  public static DeepOrange700: Color = Color.fromHexString('#E64A19');
  public static DeepOrange800: Color = Color.fromHexString('#D84315');
  public static DeepOrange900: Color = Color.fromHexString('#BF360C');
  public static DeepOrangeA100: Color = Color.fromHexString('#FF9E80');
  public static DeepOrangeA200: Color = Color.fromHexString('#FF6E40');
  public static DeepOrangeA400: Color = Color.fromHexString('#FF3D00');
  public static DeepOrangeA700: Color = Color.fromHexString('#DD2C00');
  public static Brown50: Color = Color.fromHexString('#EFEBE9');
  public static Brown100: Color = Color.fromHexString('#D7CCC8');
  public static Brown200: Color = Color.fromHexString('#BCAAA4');
  public static Brown300: Color = Color.fromHexString('#A1887F');
  public static Brown400: Color = Color.fromHexString('#8D6E63');
  public static Brown500: Color = Color.fromHexString('#795548');
  public static Brown600: Color = Color.fromHexString('#6D4C41');
  public static Brown700: Color = Color.fromHexString('#5D4037');
  public static Brown800: Color = Color.fromHexString('#4E342E');
  public static Brown900: Color = Color.fromHexString('#3E2723');
  public static Gray50: Color = Color.fromHexString('#FAFAFA');
  public static Gray100: Color = Color.fromHexString('#F5F5F5');
  public static Gray200: Color = Color.fromHexString('#EEEEEE');
  public static Gray300: Color = Color.fromHexString('#E0E0E0');
  public static Gray400: Color = Color.fromHexString('#BDBDBD');
  public static Gray500: Color = Color.fromHexString('#9E9E9E');
  public static Gray600: Color = Color.fromHexString('#757575');
  public static Gray700: Color = Color.fromHexString('#616161');
  public static Gray800: Color = Color.fromHexString('#424242');
  public static Gray900: Color = Color.fromHexString('#212121');
  public static BlueGray50: Color = Color.fromHexString('#ECEFF1');
  public static BlueGray100: Color = Color.fromHexString('#CFD8DC');
  public static BlueGray200: Color = Color.fromHexString('#B0BEC5');
  public static BlueGray300: Color = Color.fromHexString('#90A4AE');
  public static BlueGray400: Color = Color.fromHexString('#78909C');
  public static BlueGray500: Color = Color.fromHexString('#607D8B');
  public static BlueGray600: Color = Color.fromHexString('#546E7A');
  public static BlueGray700: Color = Color.fromHexString('#455A64');
  public static BlueGray800: Color = Color.fromHexString('#37474F');
  public static BlueGray900: Color = Color.fromHexString('#263238');
  public static Black: Color = Color.fromHexString('#000000');
  public static White: Color = Color.fromHexString('#FFFFFF');

  public static fromHexString(value: string): Color {
    let token: string = '';
    for (let offset = 0; offset < value.length; offset++) {
      const char = value.charAt(offset);
      if (6 > token.length && '0123456789abcdefABCDEF'.indexOf(char) !== -1) {
        token += char;
      }
      if (token.length > 5) {
        break;
      }
    }
    const match = token.match(new RegExp('.'.repeat(token.length / 3), 'g'));
    if (match) {
      const [r, g, b] = match
        .map(comp => {
          comp = comp.length === 1 ? comp + comp : comp;
          return Number.parseInt(comp, 16);
        });
      return new this(r, g, b);
    }
    throw new Error(`${this.name}.fromRgbString: unable to parse input value "${value}"`);
  }

  public static fromRgbString(value: string): Color {
    const oi = value.indexOf('(', 0);
    if (oi !== -1) {
      const ci = value.indexOf(')', oi);
      if (ci !== -1) {
        const [r, g ,b, a] = value
          .slice(oi + 1, ci)
          .split(',')
          .map(comp => Number.parseFloat(comp.trim()));
        return new this(r, g ,b, a);
      }
    }
    throw new Error(`${Color.name}.fromRgbaString: unable to parse input string "${value}"`);
  }

  public r: number;

  public g: number;

  public b: number;

  public a: number;

  constructor(r: number, g: number = r, b: number = r, a: number = 1) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }

  public toRgbString(): string {
    return `rgb(${this.r}, ${this.g}, ${this.b})`;
  }

  public toRgbaString(): string {
    return `rgb(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
  }

  public toHexString(): string {
    const r = this.r.toString(16);
    const g = this.r.toString(16);
    const b = this.r.toString(16);
    return `#${(r.length === 1 ? '0' : '') + r
    }${(g.length === 1 ? '0' : '') + g
    }${(b.length === 1 ? '0' : '') + b}`
  }

  public toString(): string {
    return this.toRgbaString();
  }
}
