interface HeaderProps {
  title: string;
  // contentColor: string;
  back?: boolean;
  menu?: boolean;
  background?: string;
  rightComponent?: React.ReactNode;
  leftComponent?: React.ReactNode;
  centerComponent?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = props => {
  const {colors} = useTheme() as Theme;
  const styles = header(colors);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        {props.back && (
          <TouchableOpacity
            onPress={navigation.goBack}
            style={styles.iconContainer}>
            <ArrowIcon color={colors.clearText} />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.centerContainer}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <View style={styles.rightContainer}>
        <TouchableOpacity style={styles.iconContainer}></TouchableOpacity>
      </View>
    </View>
  );
};

export {Header};
