import React from 'react'

const SetModeScreen =()=>{
    return (
        <View style={styles.container}>
            <Header backgroundColor={microMode ? colors.micro : colors.macro} style={styles.header}
                barStyle={'light-content'}
                leftComponent={<DrawerIcon />}
                // centerComponent={<Switch value={microMode} onValueChange={() => setMicroMode(!microMode)} ios_backgroundColor={colors.micro} trackColor={{ true: colors.macro, false: colors.micro }}/>}
                rightComponent={<Text style={styles.funds}>Funds: $100</Text>}
            />
            <View style={styles.container}>
                <View style={styles.getStartedContainer}>
                    <Text style={styles.appTitle}>Play the field</Text>
                </View>
                <TouchableOpacity
                    onClick={() => chooseMode(false)}
                    style={styles.majorBox}
                >
                    <Text style={styles.majorText}>Bet By Units</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onClick={() => chooseMode(true)}
                    style={styles.majorBox}
                >
                    <Text style={styles.majorText}>Bet With Total</Text>
                </TouchableOpacity>
                <View>
                    <Text>xx{stepOne.toString()}</Text>
                    <Text>xx{microMode.toString()}</Text>
                </View>
            </View>
        </View>
    )
}

export default SetModeScreen