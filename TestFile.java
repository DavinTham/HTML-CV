package org.yourcompany.yourproject;
/*
 * Name: Davin Thamtoro
 * Function: this program is the test file for special character
 */

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;

public class TestFile {
    @Test
    void specialTest() {
        testCases test = new testCases();
        assertEquals(true, test.specialChar('!'));
    }
}
