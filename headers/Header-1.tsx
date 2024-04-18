interface HeaderProps {
  title?: string;
  contentColor: string;
  back?: boolean;
  menu?: boolean;
  background?: string;
}

const Header = ({contentColor, ...props}: HeaderProps) => {
  const {colors} = useTheme() as Theme;
  const navigation = useNavigation<DrawerNavigationProp<any>>();
  const styles = header(colors);
  const containerStyle: StyleProp<ViewStyle> = [styles.container];
  if (props.background) {
    containerStyle.push({backgroundColor: props.background});
  }
  return (
    <View style={containerStyle}>
      <View style={styles.leftContainer}>
        {props.menu && !props.back && (
          <TouchableOpacity
            onPress={navigation.toggleDrawer}
            activeOpacity={0.8}>
            <MenuIcon size={23} color={contentColor} />
          </TouchableOpacity>
        )}
        {props.back && !props.menu && (
          <TouchableOpacity onPress={navigation.goBack} activeOpacity={0.8}>
            <ArrowIcon size={26} color={contentColor} />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.centerContainer}>
        <Text numberOfLines={1} style={[styles.title, {color: contentColor}]}>
          {props.title}
        </Text>
      </View>
      <View style={styles.rightContainer} />
    </View>
  );
};

export {Header};
