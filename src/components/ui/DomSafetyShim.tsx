'use client';

// Protect React from DOM mutations caused by browser extensions
// (e.g., Google Translate, Grammarly, Dark Reader, Safari Translate)
// which can trigger "Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node."
if (typeof window !== 'undefined') {
  const originalRemoveChild = Node.prototype.removeChild;
  Node.prototype.removeChild = function <T extends Node>(child: T): T {
    if (child.parentNode !== this) {
      if (process.env.NODE_ENV !== 'production') {
        console.warn('DOMSafetyShim: prevented removeChild on detached node', child);
      }
      return child;
    }
    return originalRemoveChild.call(this, child) as T;
  };

  const originalInsertBefore = Node.prototype.insertBefore;
  Node.prototype.insertBefore = function <T extends Node>(
    newNode: T,
    referenceNode: Node | null
  ): T {
    if (referenceNode && referenceNode.parentNode !== this) {
      if (process.env.NODE_ENV !== 'production') {
        console.warn('DOMSafetyShim: prevented insertBefore on detached reference node', referenceNode);
      }
      return newNode;
    }
    return originalInsertBefore.call(this, newNode, referenceNode) as T;
  };
}

export function DomSafetyShim() {
  return null;
}
