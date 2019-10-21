import { TextStyle, ViewStyle } from "react-native"
import Color from '../../theme/Color'

/**
 * All text will start off looking like this.
 */
const BASE_VIEW: ViewStyle = {
  borderRadius: 4,
  justifyContent: "center",
  alignItems: "center",
}

const PRIMARY_BASE_VIEW: ViewStyle = {
  backgroundColor: Color.primaryLight,
}

const BASE_TEXT: TextStyle = {
  color: Color.primaryText,
  fontSize: 14
}

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const viewPresets = {
  /**
   * A smaller piece of secondary information.
   */
  primary: { ...BASE_VIEW, ...PRIMARY_BASE_VIEW } as ViewStyle,
  secondary: { ...BASE_VIEW, backgroundColor: Color.secondaryDark }
}

export const textPresets = {
  primary: { ...BASE_TEXT } as  TextStyle,
  secondary: { ...BASE_TEXT, color: Color.secondaryText } as  TextStyle,
}

/**
 * A list of preset names.
 */
export type ButtonPresetNames = keyof typeof viewPresets