/*********************************************************************
 * Copyright (c) 2018 Red Hat, Inc.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 **********************************************************************/

import { FactoryTheiaClient } from "./factory-theia-client";
import { CheWorkspaceProjectManager } from "./che-workspace-project-manager";

export async function start() {
    await (new FactoryTheiaClient()).onStart();
    new CheWorkspaceProjectManager().onStart();
}

export function stop() {
}
