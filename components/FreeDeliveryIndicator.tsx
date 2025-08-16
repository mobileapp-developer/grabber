import { FreeDeliveryIndicatorProps } from '@/types/FreeDeliveryIndicator.type';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const PROGRESS_BAR_HEIGHT = 7;

const FreeDeliveryIndicator = ({
    amountLeft,
    cartTotal = 0.00,
    freeDeliveryThreshold = 0.00,
}: FreeDeliveryIndicatorProps) => {
    const threshold = Number(freeDeliveryThreshold) || 0;

    // compute remaining amount if not provided
    const remaining = typeof amountLeft === 'number' && amountLeft >= 0
        ? amountLeft
        : Math.max(threshold - (Number(cartTotal) || 0), 0);

    const progress = threshold > 0 ? Math.min((Number(cartTotal) || 0) / threshold, 1) : 1; // 0..1
    const reached = threshold <= 0 || (Number(cartTotal) || 0) >= threshold;

    return (
        <View style={styles.container}>
            {reached ? (
                <Text style={styles.infoText}>
                    <Text style={styles.bold}>Free delivery available</Text>
                </Text>
            ) : (
                <Text style={styles.infoText}>
                    You are <Text style={styles.bold}>{`$${remaining.toFixed(2)}`}</Text> away from free delivery
                </Text>
            )}

            <View style={styles.progressBarBg}>
                <View style={[styles.progressBar, { width: `${progress * 100}%` }]} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 18,
        backgroundColor: '#fff',
        alignItems: 'center',
        borderRadius: 12,
        margin: 12,
        shadowColor: '#000',
        shadowOpacity: 0.07,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        elevation: 3,
    },
    infoText: {
        fontSize: 16,
        color: '#222',
        marginBottom: 8,
        textAlign: 'center',
    },
    bold: {
        fontWeight: 'bold',
    },
    progressBarBg: {
        width: '100%',
        height: PROGRESS_BAR_HEIGHT,
        backgroundColor: '#e0e0e0',
        borderRadius: PROGRESS_BAR_HEIGHT / 2,
        marginBottom: 15,
        overflow: 'hidden',
    },
    progressBar: {
        height: '100%',
        backgroundColor: '#0CA201',
        borderRadius: PROGRESS_BAR_HEIGHT / 2,
    },
    counter: {
        position: 'absolute',
        right: 18,
        top: 8,
        backgroundColor: '#F44336',
        borderRadius: 10,
        minWidth: 20,
        paddingHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    counterText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 13,
    }
});

export default FreeDeliveryIndicator;