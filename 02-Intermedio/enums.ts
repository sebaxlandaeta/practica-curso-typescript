// 01. Sintaxs de enums

// Palabra reservada enum para declarar un enum
enum RolUsuario { 
    Admin = 'ADMIN', 
    Cliente = 'CLIENTE',
    Invitado = 'INVITADO'
}

// Usando enums
function verificarPermiso(rol: RolUsuario):void {
    if (rol === RolUsuario.Admin) {
        console.log('Carga modelo de admin...')
    }
}

// Ejemplo: Control de Estados en una Pasarela de Pagos

enum EstadoTransaccion {
    Pendiente = 'PENDIENTE',
    Procesando = 'PROCESANDO',
    Aprobada = 'APROBADA',
    Rechazada = 'RECHAZADA',
    Reembolsada = 'REEMBOLZADA' 
}

interface Transaccion {
    id: number | string
    monto: number
    estado: EstadoTransaccion
}

function notificacionPago (transaccion: Transaccion): string {
    switch (transaccion.estado) {
        case EstadoTransaccion.Aprobada:
            return `¡Éxito! Pago de $${transaccion.monto} procesado correctamente.`;
        
        case EstadoTransaccion.Rechazada:
            return "El pago fue rechazado por el banco. Intenta con otro método.";
        
        case EstadoTransaccion.Pendiente:
        case EstadoTransaccion.Procesando:
            return "Tu pago está en proceso, te avisaremos cuando se complete.";
        
        case EstadoTransaccion.Reembolsada:
            return "Este pago fue devuelto al cliente.";

        default:
            return "Estado de transacción desconocido."; // <--- Garantiza que siempre devuelva un string
    } 
}