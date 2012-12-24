/**
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
 */

package org.apache.bookkeeper.bookie;

/**
 * This is the garbage collector interface, garbage collector implementers
 * need to extends this class to remove the deleted ledgers.
 */
public interface GarbageCollector {
    /**
     * Do the garbage collector work
     *
     * @param garbageCleaner
     *          cleaner used to clean selected garbages
     */
    public abstract void gc(GarbageCleaner garbageCleaner);

    /**
     * A interface used to define customised garbage cleaner
     */
    public interface GarbageCleaner {

        /**
         * Clean a specific ledger
         *
         * @param ledgerId
         *          Ledger ID to be cleaned
         */
        public void clean(final long ledgerId) ;
    }

}
